import {test, expect} from '@playwright/test'
import { Formfilling } from '../Pages/Formfilling'
import { Drag_dropSliders } from '../Pages/Drag_dropSliders'
import { LoginwithlambdatestUrl } from '../Pages/LoginwithlambdatestUrl'

test.beforeEach('Test0', async ({page})=>{

const test0 = new LoginwithlambdatestUrl(page);
await test0.openLambdatest()

})
test('Test1', async ({page})=>{

    const test1 = new LoginwithlambdatestUrl(page);
    await test1.Simple_form_demo()
    await test1.Single_input_field()

})
test('Test2', async ({page})=>{

    const test2 = new Drag_dropSliders(page);

    await test2.draganddrop()
    await test2.setvalue(95) 
    
    })

    test('test3', async ({page})=>{
  
        const test3 = new Formfilling(page);
        
        await test3.inputform()
        await test3.submitWithoutFilling()
        await test3.fillFormAndSubmit()
   })
    