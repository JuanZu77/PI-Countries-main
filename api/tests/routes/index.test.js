const app = require('../../src/app');
const session = require('supertest')
const agent = session(app)

describe ('Test Countries', ()=>{

    describe('GET /countries',()=>{

        it('Should bring all countries, status(200)', async() =>{
            await agent.get('/countries').expect(200);
        });

        it('should respond with status(200) if there is a country with the indicated ID', async()=>{
            await agent.get('/countries/arg').expect(200)
        });

         it(`should bring an object with the following properties: "id", "name", "flag", "continent", "capital", "capital", "suregion", "area", "population" and "activities"`, async()=>{
           const {body} = await agent.get('/countries/arg')
           expect(body).toHaveProperty('id')
           expect(body).toHaveProperty('name')
           expect(body).toHaveProperty('flag')
           expect(body).toHaveProperty('continent')
           expect(body).toHaveProperty('capital')
           expect(body).toHaveProperty('subregion')
           expect(body).toHaveProperty('area')
           expect(body).toHaveProperty('population')
           expect(body).toHaveProperty('activities')
        });


        it(`should respond with error if the ID is incorrect, status(404)` , async()=>{
           await agent.get('/countries/testeandoBackAppHenry').expect(404)
        });

    });


});//describe principal


describe('TEST ACTIVITIES', ()=>{

    describe ('GET  /activity ', ()=>{
    
        it('should bring all created activities, status(200)', async() =>{
            await agent.get('/activity').expect(200);
        });
    });


    describe ('POST  /activity ', ()=>{

        const activity = { name:'Juan', difficulty:'3', duration:'5 hs', season:'summer', countries:'Argentina'}
    
        const activityError = { name: 'Dani', difficulty:'3', duration:'5 hs', season:'summer'}//falta countries
    
        it ('should return Error if properties are missing, status(404)', async()=>{
              await agent.post('/activity').send(activityError).expect(404)
       });
       
    
        it ('should send the activity if there are no errors, status(200)', async ()=>{
               await agent.post('/activity').send(activity).expect(200)
        });
    });
    
    

});//Cierra describe principal