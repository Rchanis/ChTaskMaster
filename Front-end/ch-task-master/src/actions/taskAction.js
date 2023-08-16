import { NEW_TASK } from "../actionsTypes";

const newTask = (title, description) => {
    return {
        type: NEW_TASK,
        title: title,
        description: description,
    };
};

export { newTask };