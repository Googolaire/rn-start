#React Native Complete Course hooks 2019

## Dec 21st 2019

@googolaire


### Game Plan 

Today I am going to start the [The Complete React Native + Hooks 2019 Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)

It requires me to download and upgrade node from node v12.0.0 to v12.10.0 Built a component and used a primitive element (text) there are others like view, image, button ect.  We Connected the component to a stackNavogator built from the react-navigation package to handle navigation in react native apps. We created a stylesheet object using a variable and the styleSheet.create function and we applied the prop style equals to {styles.textStyle}. You should use the view primative when you use multiple elements in a component. One new thing learned was that you could make the return statement for a multi lined functional component in two ways.

ie . 

With the first Element Tag on the same line as return is

Return <Tag>

<SecondTag />

</Tag>

Or 

return (

<Tag>

<SecondTag />

</Tag>

Now i am going to do an exercise. 

I am going to make some changes to the componentscreen component we just made. 

It should have two text elements the first one should say Getting started with react native with a font size of 45. And the second one should say My name is {youname} assigning you name as a variable, and a font size of 20.

I completed the exercise the only issue i had was a misspelling of the variable.

Now I am going to build a list, by building a new component in the screens dir.  \
Inorder to create the flat list we need to pass data props to the using the array of elements. And we are required to pass in the readerItem prop function that will turn each individual item into an element. FlatList will be like map but better in React Native

There are two ways you can declare the key prop for an item 

Firstly, we can make a key as a key property in the object. It has to be a unique string inside the array that we are using the key for, and it must always remain the same meaning it is immutable.   

You can also declare the key directly on the FlastLIst Component. With the keyExtractor function prop. It gets called with a single argument called friend. And therefore the keyExtractor will be called with every object in the array. And therefore we pass the key using the second option because we only have to declare the keyExtractor once opposed to setting the key in every object. And to do that we need to use a unique string to return for the key Extractor function. So we can use the name property by returning friend.name.  

Another Prop is horizontal={bool} default is true so no need to add true

If you use it and want to hide the scroll bar you can use the prop showHorizontalScrollIndicator={false} 

Next we are going to be making the routes for the components so that you can navigate the app screens. To do that we just

Detect when a user clicks a button and how to navigate from there to the new component.

There are two way you can show a button to a user.



1. With a primitive element button (very simple for showing a button that can capture a press)
2. TouchableOpacity (highly customizable) 

A button in react native is a self closing tag, and you pass the text to the title prop.To call a function when the button is pressed we need to use the prop onPress={functionToCall} in this case we just console.log(‘Button Pressed) ie. onPress={() => console.log(‘Button Pressed’)} 

Console.logs show up in the terminal that you ran the react native app from the expo start command. 

Now to do the TouchableOpacity version of a “Button”  To do that we just 

TouchableOpacity is not self closing like the button primitive element. You need to add the elements you want to react to a touch inside of the two tags. To use it for a press event add the prop onPress with the function to call.

[✅] Download node v12.10.0 


[✅] Install expo


[✅] Install yarn


[✅] Create a component


[✅] Add style to the component 


[✅] Connect the component to the stack navigator


[✅] Do simple Getting started exercise.

[✅] Building a List 

[✅] Again Once a component is created you have to wire it up in the app.js file to the navigator 

[✅]  Use FlatList (Primitive Element) To turn an array into a list of elements

[✅]  Add some textStyle to the list to give it some margin vertical

[✅]  Exercise Add an age property to the  friend objects

[✅] Make the list items vertical again

[✅] Print out the Friends Name and - Age 

[✅] Make the main view the Home Screen

[✅] Create a button to Console.log ‘Button Pressed’

[✅] Making a TouchableOpacity “Button” to console.log ‘List Pressed’


### Issues I had



1. Expo Start was unrecognized
    1. (solved) Had to install expo with yarn then install yarn with `npm install -g yarn`
2. requiring unknown module 1180
    2. (solved) Rewrote the component in the import 
3. Warning VirtualizedList: missing keys for items 
    3. (Solved) Make sure to specify a key property on each item object

         

*   Mid session links

    [https://www.one-tab.com/page/b9p6WqbVTT69syvgybETAw](https://www.one-tab.com/page/b9p6WqbVTT69syvgybETAw)


    **[Official Course Repo](https://github.com/StephenGrider/rn-casts)**

*   End of session links

    [https://www.one-tab.com/page/Doz7NFGYQNeDF_nbxk956w](https://www.one-tab.com/page/Doz7NFGYQNeDF_nbxk956w)


	


### End of session Brief

I left off at video number 27 In the next section we will look at how to actually navigate to a new route from another screen by calling a function on the onPress. 


##### Assets

C:\Users\owner\Documents\ReactNative\rn-starter

[https://nodejs.org/download/release/v12.10.0/node-v12.10.0-x64.msi](https://nodejs.org/download/release/v12.10.0/node-v12.10.0-x64.msi)

[Official Course Repo ](https://github.com/StephenGrider/rn-casts)



## Dec 22nd 2019

@googolaire


### Game Plan 

Creating a navigable route from the initial component to  another component via the button or TouchableOpacity 

React Navigation has changed a bit since their recent v.4.0.0 release:

https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0

We must now install three libraries separately. In your terminal run the following command:

npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack

Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

✔️Install react-native-gesture-handler 


    ✔️Install react-native-reanimated 


    ✔️Install react-navigation-stack


    ✔️Console.log(props)


    ✔️console.log(props.navigation)


    ✔️Use the navigation function to navigate to one of our routes


### Issues I had



1. I was not able to hot load the app
    1. (solved) terminated and restarted the app
*   Mid session links

    [https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706594#overview](https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706594#overview)

*   End of session links


### End of session Brief

Didn't get as much done today as I would have liked. What we did do was create a navigable button using the built in prop navigation and the method chained to that navigate(‘ComponentToNavigateTo’)  


##### Assets

