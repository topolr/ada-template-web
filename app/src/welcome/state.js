import {Service} from "adajs";

class WelcomeService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default WelcomeService;