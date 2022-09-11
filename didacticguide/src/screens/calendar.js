import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import { createEntry } from '../../mutations';

const Form = t.form.Form;
const User = t.struct({
  title: t.String,
  body: t.String,
});
const SubmitDiaryEntry = ({navigation}) => {
  const [form, setForm] = useState(null); 
  const [initialValues, setInitialValues] = useState({});

  const options = {
    auto: 'placeholders',
    fields: {
      body: {
        multiLine: true,
        stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100,
              textAlignVertical: 'top',
            },
          },
        },
      },
    },
  };
const handleSubmit = async () => {
  //try {
    const value = await form.getValue();
    const user = await Auth.currentAuthenticatedUser();


    const entryDetails = {
      body: value.body,
      image: "temp image",
      title: value.title

    };



    console.log("TITLE IS " + value.title);
    console.log("BODY IS " + value.body);

    Promise.resolve();
  //const response = await API.graphql(graphqlOperation(createEntry, entryDetails));
  const response = await API.graphql({ query: createEntry, variables: {input: entryDetails}, authMode: "AMAZON_COGNITO_USER_POOLS" });

      //console.log("APPLE");
      console.log("Response: + \n");
      console.log(response);
    //} catch (e) {
    //  console.log(e.message);
    //}

  };
return (
    <>
      <SafeAreaView style={styles.addDiaryView}>
        <ScrollView>
          <Form
            ref={(c) => setForm(c)}
            value={initialValues}
            type={User}
            options={options}
          />
          <Button title="Save" onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  addDiaryView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    height: 'auto',
  },
});
export default SubmitDiaryEntry;