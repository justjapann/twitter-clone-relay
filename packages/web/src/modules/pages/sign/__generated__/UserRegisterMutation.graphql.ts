/**
 * @generated SignedSource<<f886be708c5fefffb29bf70bd38c927c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserRegisterMutation$variables = {
  displayName?: string | null;
  email: string;
  password: string;
  username: string;
};
export type UserRegisterMutation$data = {
  readonly userRegisterMutation: {
    readonly me: {
      readonly email: string;
      readonly id: string;
      readonly username: string;
    } | null;
    readonly token: string | null;
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
  "name": "displayName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "displayName",
            "variableName": "displayName"
          },
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
    "concreteType": "UserRegisterPayload",
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
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserRegisterMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserRegisterMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b6811739d4861a07fb041df469adbd1a",
    "id": null,
    "metadata": {},
    "name": "UserRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegisterMutation(\n  $username: String!\n  $displayName: String\n  $email: String!\n  $password: String!\n) {\n  userRegisterMutation(input: {username: $username, displayName: $displayName, email: $email, password: $password}) {\n    token\n    me {\n      id\n      username\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c8322517ad0ea7d1bd55b480e3dab62e";

export default node;
