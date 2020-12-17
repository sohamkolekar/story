import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert,ToastAndroid,KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase'

class WriteStory extends React.Component{
    constructor(){
        super();
        this.state={
            storyName:'',
            authorName:'',
            story:''
        }
    }

    submitStory=async()=>{
        var submitMessage
        db.collection("stories").add({
            "author":this.state.authorName,
            "storyName":this.state.storyName,
            "story":this.state.story,
            "date":firebase.firestore.Timestamp.now().toDate(),
        })
        submitMessage="story saved"
        ToastAndroid.show(submitMessage,ToastAndroid.SHORT);

        this.setState({
            authorName:'',
            storyName:'',
            story:''
        })
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" enabled>
                <TextInput
                    placeholder="Name ?"
                    style={styles.smallBox}
                    onChangeText={text=>(
                        this.setState({
                            storyName:text
                        })
                    )}
                />

               <TextInput
                    placeholder="Author ?"
                    style={styles.smallBox}
                    onChangeText={text=>(
                        this.setState({
                            authorName:text
                        })
                    )}
                />

                <TextInput
                    multiline={true}
                    placeholder="story ?"
                    style={styles.storybox}
                    onChangeText={text=>(
                        this.setState({
                            story:text
                        })
                    )}
                />

                <TouchableOpacity
                style={styles.submitBox}
                onPress={this.submitStory()}>
                    <Text>Submit</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    smallBox:{
        borderWidth:3,
        borderColor:"rgb(100,79,23)"
    },
    storybox:{
        borderWidth:3,
        borderColor:"rgb(30,79,230)"
    },
    submitBox:{
        width:60,
        height:60,
        borderRadius:30,
        borderColor:"orange"
    }
})

export default WriteStory