/**
 * @jest-environment jsdom
 */

import { slide } from '../src/client/js/slide'

describe("testing slide fn", () =>{
    test("testing if slide fn performs required function", () => {

        const pages = '<div class="page"></div>'
        expect(slide).toBeDefined();
    }
    )
})