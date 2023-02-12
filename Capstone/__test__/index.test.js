import request from 'supertest'
import app from '../src/server/index.js'
const express = require('express')


describe('home routes', function () {
    request(app)

    test('responds to /', async () => {
        
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);     
    });

    test('responds to /getObject', async () => {
        
        const res = await request(app).get('/getObject');
        expect(res.statusCode).toBe(200);     
    });

    test('responds to /addObject', async () => {
        const TripInfo = [
            {latitude: "latitude",
            longitude: "longitude",
            destination: "destination",
            country: "country",
            startDate: "startDate",
            endDate: "endDate"}
        ]
        
        const res = await request(app).post('/addObject').send({TripInfo}) 
        expect(TripInfo).toBeDefined();       
    });

    test('responds to /keys', async () => {
        
        const res = await request(app).get('/keys');
        expect(res.statusCode).toBe(200);
    });

    test('responds to /removeEntry', async () => {
        
        const res = await request(app).get('/removeEntry');
        expect(res.statusCode).toBe(200);      
    });

    test('responds to /removeEntries', async () => {
        
        const res = await request(app).get('/removeEntries');
        expect(res.statusCode).toBe(200);    
    }); 

});
