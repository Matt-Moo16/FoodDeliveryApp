import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: 'Matts Restaurant',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    price: '$$$',
    reviews: '1900',
    rating: '4.7',
    categories: [
        {title: 'New American'},
        {title: 'Home Cooking'}
    ]
}




export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params

    const formattedCategories = categories.map((cat) => cat.title).join(' • ')
    const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 🎫 • ${rating} ⭐ (${reviews}+)`
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDescription description={description} />
        </View>
    )
}



const RestaurantImage = ({image}) => (
    <Image 
        source={{uri: image}} 
        style={{
            width: '100%',
            height: 180,
        }}
    />
)

const RestaurantName = ({name}) => (
    <View>
    <Text
        style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {name}
    </Text>
    </View>
)

const RestaurantDescription = ({description}) => (
    <Text
        style={{
            marginTop: 10, 
            marginHorizontal: 15,
            fontWeight: '400',
            fontSize: 15.5
        }}
    >{description}</Text>
)



