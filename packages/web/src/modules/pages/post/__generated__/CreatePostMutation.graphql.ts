/**
 * @generated SignedSource<<b31a44f0de5ff041edcc96a7c1d63d26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreatePostMutation$variables = {
  body: string;
};
export type CreatePostMutation$data = {
  readonly CreatePost: {
    readonly postEdge: {
      readonly node: {
        readonly body: string | null;
        readonly id: string | null;
      } | null;
    } | null;
  } | null;
};
export type CreatePostMutation = {
  response: CreatePostMutation$data;
  variables: CreatePostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "body"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "body",
            "variableName": "body"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreatePostPayload",
    "kind": "LinkedField",
    "name": "CreatePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostEdge",
        "kind": "LinkedField",
        "name": "postEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "body",
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ce88a2c5d968b517d3ac593066122e0b",
    "id": null,
    "metadata": {},
    "name": "CreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostMutation(\n  $body: String!\n) {\n  CreatePost(input: {body: $body}) {\n    postEdge {\n      node {\n        id\n        body\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "462fe377c932c3147e53e4ff584bd86e";

export default node;
