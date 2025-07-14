import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {deleteItem} from "./cartSlice.js";

export function DeleteItem({id}) {
    const dispatch = useDispatch();

    return (
        <Button type="small" onClick={() =>  dispatch(deleteItem(id))}>Delete</Button>
    );
}