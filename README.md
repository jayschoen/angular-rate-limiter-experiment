simple experiment to play around with a rate limiter in angular

the limiter logic exists in an interceptor

the requests are made from the "test-data" service

it uses a couple of fake endpoints to get "data" from the assets directory

spam clicking on the two "get data" buttons in the ui result in only 1 request per second being made
