/**
 * @generated SignedSource<<a82a0034d6e17125690d31391dbb21f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserRegisterMutation$variables = {
  email: string;
  password: string;
  username: string;
};
export type UserRegisterMutation$data = {
  readonly userRegisterMutation: {
    readonly token: string | null;
    readonly user: {
      readonly email: string;
      readonly password: string;
      readonly username: string;
    } | null;
  } | null;
};
export type UserRegisterMutation = {
  response: UserRegisterMutation$data;
  variables: UserRegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
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
    "concreteType": "userRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegisterMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "password",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserRegisterMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserRegisterMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "11e4da4f35974a77557a8f202163029d",
    "id": null,
    "metadata": {},
    "name": "UserRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegisterMutation(\n  $username: String!\n  $email: String!\n  $password: String!\n) {\n  userRegisterMutation(input: {username: $username, email: $email, password: $password}) {\n    token\n    user {\n      username\n      email\n      password\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cdd3d2c7bd55ad90a27bb03e78c7bf74";

export default node;
