// CALLBACK HELL
function getData (dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000) // 1s = 1000ms
}

getData(1, ()=>{
    console.log('getting data2...');
    getData(2, ()=>{
        console.log('getting data3...');
        getData(3);
    });
});





// PROMISES
// bascis of promise work's
//create promises....
function getData (dataId, getNextData){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve('success');
            if(getNextData){
                getNextData();
            }
        }, 5000); // 1s = 1000ms
    }); 
}


// how to use promises?
const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err)
});


// Promise Chain
// example 1
function asyncFunc1(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success")
        }, 4000);
    });
}
function asyncFunc2(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000);
    });
}
console.log("getting data1....");
asyncFunc1().then((res) => {
    console.log("getting data2....");
    asyncFunc2().then((res) => {});
});

// example 2
function getData (dataId){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve('success');
        }, 2000); // 1s = 1000ms
    }); 
}
console.log("getting data1....");
getData(1).then((res) => {
    console.log("getting data2....");
    return getData(2);
}).then((res) => {
    console.log("getting data3....");
    return getData(3);
}).then((res) => {
    console.log(res);
});




// ASYNC AWAIT
// example 1
function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await api();
    await api();
}

// example 2
function getData (dataId){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve('success');
        }, 2000); // 1s = 1000ms
    }); 
}

async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}