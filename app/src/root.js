import {root, StaticViewGroup} from "adajs";
import Welcome from "./welcome/base";

@root()
class Root extends StaticViewGroup {
    constructor(option) {
        super(option);
        this.addChild(Welcome);
    }
}

export default Root;