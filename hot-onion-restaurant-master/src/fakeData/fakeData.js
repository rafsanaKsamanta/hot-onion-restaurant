let fakeData = [
    {
        id: 1,
        name: "Bagel And Cream Cheese",
        images: "https://i.ibb.co/PzV4My4/breakfast1.png",
        type: "Breakfast",
        price: 6.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 2,
        name: "Breakfast Sandwich",
        images: "https://i.ibb.co/QF7BgyX/breakfast2.png",
        type: "Breakfast",
        price: 9.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 3,
        name: "Baked Chicken",
        images: "https://i.ibb.co/2vjmbLS/breakfast3.png",
        type: "Breakfast",
        price: 10.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 4,
        name: "Eggs Benedict",
        images: "https://i.ibb.co/LNq3sXf/breakfast4.png",
        type: "Breakfast",
        price: 8.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 5,
        name: "Toast Croissant Fried Egg",
        images: "https://i.ibb.co/SKTtVc1/breakfast5.png",
        type: "Breakfast",
        price: 19.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 6,
        name: "Full Breakfast Fried Egg Toast Brunch",
        images: "https://i.ibb.co/5xFKwYc/breakfast6.png",
        type: "Breakfast",
        price: 3.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 1,
        name: "Healthy Meal Plan",
        images: "https://i.ibb.co/HTqG4SR/lunch1.png",
        type: "Lunch",
        price: 23.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 2,
        name: "Fried chicken bento",
        images: "https://i.ibb.co/cDmzmWL/lunch2.png",
        type: "Lunch",
        price: 9.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 3,
        name: "Tarragon-Rubbed-Salmon        ",
        images: "https://i.ibb.co/zSn50D1/lunch3.png",
        type: "Lunch",
        price: 6.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 4,
        name: "Indian Lunch",
        images: "https://i.ibb.co/cD7bkZ4/lunch4.png",
        type: "Lunch",
        price: 8.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 5,
        name: "Beef Steak",
        images: "https://i.ibb.co/SQjgyY2/lunch5.png",
        type: "Lunch",
        price: 15.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 6,
        name: "Honey-Soy-Glazed Salmon with Peppers",
        images: "https://i.ibb.co/z4t2tj7/lunch6.png",
        type: "Lunch",
        price: 7.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 1,
        name: "Salmon with Grapefruit and Lentil Salad",
        images: "https://i.ibb.co/5nD8Bfs/dinner1.png",
        type: "Dinner",
        price: 9.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 2,
        name: "Lemony Salmon Piccata",
        images: "https://i.ibb.co/JptGXgV/dinner2.png",
        type: "Dinner",
        price: 10.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 3,
        name: "Pork Tenderloin With Quinoa Pilaf",
        images: "https://i.ibb.co/RSn0Hsf/dinner3.png",
        type: "Dinner",
        price: 12.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 4,
        name: "French fries with cheese",
        images: "https://i.ibb.co/QfktpHF/dinner4.png",
        type: "Dinner",
        price: 8.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 5,
        name: "Garlic Butter Baked Salmon",
        images: "https://i.ibb.co/w6kCTK1/dinner5.png",
        type: "Dinner",
        price: 6.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    },
    {
        id: 6,
        name: "Baked Chicken",
        images: "https://i.ibb.co/MRH5Mjm/dinner6.png",
        type: "Dinner",
        price: 9.99,
        shortDescription: "How to Dream About Your Future",

        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum, est modi nobis quisquam minus dicta voluptatum delectus? Cumque sapiente accusantium officiis laboriosam, corporis id sint. Quam rem recusandae necessitatibus unde repellat commodi animi velit iure, soluta aut saepe est."
    }

]

export default fakeData;