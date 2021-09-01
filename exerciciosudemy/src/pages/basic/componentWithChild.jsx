import List from "../../components/List"
import Item from "../../components/Item"

export default function componentWithChild() {
    return (
        <div>
            <List>
                <Item content="Item #11" />
                <Item content="Item #12" />
                <Item content="Item #13" />
            </List>
        </div>
    )
}