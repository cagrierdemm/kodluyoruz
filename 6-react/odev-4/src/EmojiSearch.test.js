import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";
import emojiList from "./emojiList.json";

describe("Emoji Search Testleri", () => {

    test('Baslik Kontrol Testi', () => {
        render(<Header />);
        const headerText = screen.getByText('Emoji Search');
        expect(headerText).toBeInTheDocument();
        const imgs = screen.getAllByRole("img");
        expect(imgs.length).toEqual(2);
    });

    test('Emoji Listesi Render Testi', () => {
        render(<App />);
        const num = screen.getAllByRole("img") // Emoji sayisi kontrolu
        expect(num.length).toEqual(22); //2 tanesi header'da 20 tanesi emoji listesinde
        const list = emojiList.slice(0, 20);
        list.map((i) => {
            expect(screen.getByText(i.title)).toBeInTheDocument(); // JSON dosyasindaki verilerin title parametresini sayfada arama
        })
    })

    test('Filtreleme Testi', () => { 
        render(<App />);
        const inputArea = screen.getByRole("textbox");
        const inputText = "Nerd";

        userEvent.type(inputArea, inputText);

        setTimeout(() => {
            expect(screen.getByText(inputText)).toBeInTheDocument(); // Arama yapilma suresini dusunerek 1sn timeout ekledim.
        }, 1000);
    })

    test('Kopyalama Testi', () => {
        render(<App />);
        const title = "Smile"
        const emoji = screen.getByText(title);
        userEvent.click(emoji);
        expect(emoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😄");
    })
})