import { NEW_TASK } from "../actionsTypes";

const initialState = {
    tasks: [{
        id:0,
        title: "Consectetur culpa tempor ullamco id.",
        description: "Ullamco nostrud ipsum sunt occaecat. Ex ea cupidatat tempor dolore eiusmod mollit eiusmod commodo laborum pariatur dolore id. Excepteur dolor reprehenderit ipsum esse duis amet consectetur quis exercitation. Laboris irure anim tempor ad culpa proident nisi labore mollit cupidatat. Nulla amet eu est consequat magna minim in quis officia."
    },
    {
        id:1,
        title: "Consectetur culpa tempor ullamco id.",
        description: "Ullamco nostrud ipsum sunt occaecat. Ex ea cupidatat tempor dolore eiusmod mollit eiusmod commodo laborum pariatur dolore id. Excepteur dolor reprehenderit ipsum esse duis amet consectetur quis exercitation. Laboris irure anim tempor ad culpa proident nisi labore mollit cupidatat. Nulla amet eu est consequat magna minim in quis officia."
    },
    {
        id:2,
        title: "Consectetur culpa tempor ullamco id.",
        description: "Ullamco nostrud ipsum sunt occaecat. Ex ea cupidatat tempor dolore eiusmod mollit eiusmod commodo laborum pariatur dolore id. Excepteur dolor reprehenderit ipsum esse duis amet consectetur quis exercitation. Laboris irure anim tempor ad culpa proident nisi labore mollit cupidatat. Nulla amet eu est consequat magna minim in quis officia."
    },
    {
        id:3,
        title: "Consectetur culpa tempor ullamco id.",
        description: "Ullamco nostrud ipsum sunt occaecat. Ex ea cupidatat tempor dolore eiusmod mollit eiusmod commodo laborum pariatur dolore id. Excepteur dolor reprehenderit ipsum esse duis amet consectetur quis exercitation. Laboris irure anim tempor ad culpa proident nisi labore mollit cupidatat. Nulla amet eu est consequat magna minim in quis officia."
    },
]
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_TASK:
            const newState = {...state};
            const newTask = {
                title: action.title,
                description: action.description
            };
            newState.tasks.push(newTask);
            return newState;

        default:
            return state;
    }
}

export default taskReducer;