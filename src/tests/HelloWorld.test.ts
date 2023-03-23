import {mount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { expect, test } from "vitest";
test("test-unit",async()=>{
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld,{
        props:{
            title:"Hello Word",
        },
    });
    expect(wrapper.text()).toContain("Hello Word");
})