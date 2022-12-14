import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
})
test("header renders with correct test", () => {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
})


test("counter initially start with text of 0", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("input contain initial value of 1", () => {
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("substract button renders with +", () => {
    const substractBtn = getByTestId("substract-btn");

    expect(substractBtn.textContent).toBe("-");
})


test("changing value of input works correctly", () => {
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
})

test("click on add button adds 1 to a counter", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
})

test("click on substract button substracts 1 to a counter", () => {
    const substractBtn = getByTestId("substract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(substractBtn);

    expect(counterEl.textContent).toBe("-1");
})

test("change input value then click on add button works correctly", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("5");
})

test("change input value then click on substract button works correctly", () => {
    const substractBtn = getByTestId("substract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "-5"
        }
    })

    fireEvent.click(substractBtn);

    expect(counterEl.textContent).toBe("5");
})

test("adding and then substracting leads to the correct counter number", () => {
    const substractBtn = getByTestId("substract-btn");
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(substractBtn)
    fireEvent.click(substractBtn)

    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn)
    fireEvent.click(substractBtn)
    fireEvent.click(substractBtn)

    expect(counterEl.textContent).toBe("15")
})

test("counter contains correct className", () => {
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const substractBtn = getByTestId("substract-btn");
    const addBtn = getByTestId("add-btn");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)

    expect(counterEl.className).toBe("green");

    fireEvent.click(substractBtn)
    fireEvent.click(substractBtn)

    expect(counterEl.className).toBe("");

    fireEvent.click(substractBtn)
    fireEvent.click(substractBtn)
    fireEvent.click(substractBtn)

    expect(counterEl.className).toBe("red");

})