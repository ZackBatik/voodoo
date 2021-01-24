An app demonstrating super simple API to manage save game syncing using NodeJs, Express and MongoDb

The `savegame` uri preceed all API endpoints and the following endpoints are currently available
* GET `/saveGame`
* GET `/saveGame/getLatest`
* GET `/saveGame/list`
* POST `/saveGame/addNew`
* POST `/saveGame/isLatest`

##### Usage
On start the game asks if it's version of the file is the latest with the isLatest request.

If the the response is false, the game must follow up with the getLastest request to recieve the latest save game.

From there it must continue to update the server at regular intervals using the addNew call.

##### Example Requests

POST /saveGame/addNew
```
{
    "playerLevel": 2,
    "selectedHero": "Hercules",
    "lastEnergyTimestamp":"09/18/2020 13:38:30"
}
```

POST /saveGame/isLatest
```
{
    "latestCreateDate":"2021-01-24T15:49:58.214Z"
}
```