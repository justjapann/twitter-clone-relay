/**
 * @generated SignedSource<<862a366e34eb8f7fbcc4772ccedeb51a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createPostMutation$variables = {};
export type createPostMutation$data = {
  readonly CreatePost: {
    readonly postEdge: {
      readonly node: {
        readonly body: string | null;
        readonly id: string;
        readonly title: string | null;
      } | null;
    } | null;
  } | null;
};
export type createPostMutation = {
  response: createPostMutation$data;
  variables: createPostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "body": "testea",
          "title": "testea"
        }
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
                "name": "title",
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
    "storageKey": "CreatePost(input:{\"body\":\"testea\",\"title\":\"testea\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "createPostMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createPostMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "69e7dfe779071cd70cc949f1c8edc29f",
    "id": null,
    "metadata": {},
    "name": "createPostMutation",
    "operationKind": "mutation",
    "text": "mutation createPostMutation {\n  CreatePost(input: {title: \"testea\", body: \"testea\"}) {\n    postEdge {\n      node {\n        id\n        title\n        body\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e5c2c2e976456190c22f0424c5ba1fb";

export default node;
