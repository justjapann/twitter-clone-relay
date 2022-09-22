/**
 * @generated SignedSource<<0425793421e7d4050bbd32415cbb5d95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ModalLoginMutation$variables = {
  email: string;
  password: string;
  username: string;
};
export type ModalLoginMutation$data = {
  readonly userRegisterMutation: {
    readonly clientMutationId: string | null;
    readonly token: string | null;
    readonly user: {
      readonly email: string;
      readonly password: string;
      readonly username: string;
    } | null;
  } | null;
};
export type ModalLoginMutation = {
  response: ModalLoginMutation$data;
  variables: ModalLoginMutation$variables;
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
            "name": "password",
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
      },
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
        "kind": "ScalarField",
        "name": "clientMutationId",
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
    "name": "ModalLoginMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ModalLoginMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3bcc1fc722d03cab1aa77f9b48afa91e",
    "id": null,
    "metadata": {},
    "name": "ModalLoginMutation",
    "operationKind": "mutation",
    "text": "mutation ModalLoginMutation(\n  $username: String!\n  $password: String!\n  $email: String!\n) {\n  userRegisterMutation(input: {username: $username, password: $password, email: $email}) {\n    user {\n      username\n      password\n      email\n    }\n    token\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "595315f22e1448b25a9861ccf8d426d6";

export default node;
