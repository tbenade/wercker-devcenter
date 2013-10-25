var schema = {
  "type":"object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required":false,
  "properties":{
    "box": {
      "type":"string",
      "id": "http://jsonschema.net/box",
      "required":true
    },
    "build": {
      "type":"object",
      "id": "http://jsonschema.net/build",
      "required":false,
      "properties":{
        "steps": {
          "type":"array",
          "id": "http://jsonschema.net/build/steps",
          "required":true,
          "items":{
            "type": [
            {
              "type":"string",
              "minLength" : 1
            },
            {
              "type":"object",
              "additionalProperties": {"type":"object"}
            } ]
         }
        }
      }
    },
    "deploy": {
      "type":"object",
      "id": "http://jsonschema.net/deploy",
      "required":false,
      "properties":{
        "steps": {
          "type":"array",
          "id": "http://jsonschema.net/deploy/steps",
          "required":true
        }
      }
    },
    "services": {
      "type":"array",
      "id": "http://jsonschema.net/services",
      "required":false
    },
    "source-dir": {
      "type":"string",
      "id": "http://jsonschema.net/source-dir",
      "required":false
    }
  }
}
