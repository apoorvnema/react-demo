import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card'

function ExpenseItem(props) {
    function handleBtnClick() {
        console.log("Button clicked");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
                <button onClick={handleBtnClick} value="Change Title">Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
