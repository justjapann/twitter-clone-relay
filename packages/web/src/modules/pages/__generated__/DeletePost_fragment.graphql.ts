/**
 * @generated SignedSource<<c083fbcbdce08d5b0c68e8ab40595e2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeletePost_fragment$data = {
  readonly posts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly title: string | null;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "DeletePost_fragment";
};
export type DeletePost_fragment$key = {
  readonly " $data"?: DeletePost_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DeletePost_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DeletePost_fragment",
  "selections": [
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "dd7fae30b771a6940560b0f78cef2de7";

export default node;
