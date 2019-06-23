/*
 处理并返回 state
*/
import {DECREMENT, INCREMENT} from "../count/CounterAction";
import {handleActions} from "redux-actions-helper";
import {CounterState} from "../count/Counter";

export default handleActions<CounterState>({
    [INCREMENT](state: CounterState) {
        return {
            count: state.count + 1
        };
    },
    [DECREMENT](state: CounterState) {
        return {
            count: state.count - 1
        };
    }
}, {count: 0});