import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct test", () => {
    const { getByTestId} = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
})


test("counter initially start with text of 0", () => {
    const {getByTestId} = render(<Counter />)
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("input contain initial value of 1", () => {
    const {getByTestId} = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
    const {getByTestId} = render(<Counter />);
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("substract button renders with +", () => {
    const {getByTestId} = render(<Counter />);
    const substractBtn = getByTestId("substract-btn");

    expect(substractBtn.textContent).toBe("-");
})