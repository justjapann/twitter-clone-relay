/**
 * @generated SignedSource<<5383c684ba4abb2987e3e0b14315ba0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PostListQuery$variables = {};
export type PostListQuery$data = {
  readonly posts: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly body: string | null;
        readonly id: string | null;
        readonly title: string | null;
      } | null;
    } | null> | null;
  };
};
export type PostListQuery = {
  response: PostListQuery$data;
  variables: PostListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PostConnection",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1df96d0eaa1cda8681ba80f4deb6c1e7",
    "id": null,
    "metadata": {},
    "name": "PostListQuery",
    "operationKind": "query",
    "text": "query PostListQuery {\n  posts {\n    edges {\n      node {\n        id\n        title\n        body\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0bbce58019a393e303ca16ca5fe162c";

export default node;
