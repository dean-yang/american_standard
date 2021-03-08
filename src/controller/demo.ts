import { User } from '../entity/user';
import { Controller, Get, Provide } from '@midwayjs/decorator';
import { getModelForClass, } from '@typegoose/typegoose';


@Provide()
@Controller('/demo')
export class TestService {
    @Get('/')
    async getTest(){
        // get model
        const UserModel = getModelForClass(User);
        
        // create data
        const { _id: id } = await UserModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an "as" assertion, to have types for all properties
        
        // find data
        const user = await UserModel.findById(id).exec();
        console.log(user)
        return "hello mongodb"
    }
}