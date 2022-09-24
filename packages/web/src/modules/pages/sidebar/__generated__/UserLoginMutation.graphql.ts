/**
 * @generated SignedSource<<903f9da0452e9d2704423aac82b8eb7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserLoginMutation$variables = {
  password: string;
  username: string;
};
export type UserLoginMutation$data = {
  readonly userLoginMutation: {
    readonly me: {
      readonly displayName: string | null;
      readonly email: string;
      readonly username: string;
    } | null;
    readonly token: string | null;
  } | null;
};
export type UserLoginMutation = {
  response: UserLoginMutation$data;
  variables: UserLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UserLoginPayload",
        "kind": "LinkedField",
        "name": "userLoginMutation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "me",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UserLoginPayload",
        "kind": "LinkedField",
        "name": "userLoginMutation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "me",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eab7261e0a576434325c4c0b73a2edfc",
    "id": null,
    "metadata": {},
    "name": "UserLoginMutation",
    "operationKind": "mutation",
    "text": "mutation UserLoginMutation(\n  $username: String!\n  $password: String!\n) {\n  userLoginMutation(input: {username: $username, password: $password}) {\n    token\n    me {\n      username\n      displayName\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "535c77fda6f014ec79dd63dec1089c6a";

export default node;
