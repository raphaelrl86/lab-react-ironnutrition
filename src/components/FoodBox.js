

const FoodBox = (props) => {
    const { food } = props
    return (
        <FoodBox food={ {
            name: "Orange",
            calories: 85,
            image: "https://i.imgur.com/abKGOcv.jpg",
            servings: 1
          }} />

    )
}

export default FoodBox 