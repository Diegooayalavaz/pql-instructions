// src/__tests__/Home.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/pages-admin/Home';
import Axios from 'axios';

// Mock Axios
jest.mock('axios');

describe('Home Component', () => {
    test('renders loading state initially', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check if the header is present
        const headerElement = screen.getByText(/Select a team/i);
        expect(headerElement).toBeInTheDocument();
    });

    test("fetches and displays teams from API", async () => {
        // Mock API response
        const teamsData = [
            { id: 1, name: "Gryffindor" },
            { id: 2, name: "Hufflepuff" },
            { id: 3, name: "Ravenclaw" },
        ];

        Axios.get.mockResolvedValueOnce({ data: teamsData });

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Wait for the teams to be rendered
        await waitFor(() => {
            // Check if the team cards are displayed
            expect(screen.getByText("Gryffindor")).toBeInTheDocument();
            expect(screen.getByText("Hufflepuff")).toBeInTheDocument();
            expect(screen.getByText("Ravenclaw")).toBeInTheDocument();
        });
    });

    test("displays 'Create a team' card", async () => {
        // Mock API response
        const teamsData = [];
        Axios.get.mockResolvedValueOnce({ data: teamsData });

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Wait for the teams to be rendered
        await waitFor(() => {
            // Check if the 'Create a team' card is displayed
            const createTeamCard = screen.getByText(/Create a team/i);
            expect(createTeamCard).toBeInTheDocument();
        });
    });

    test("renders correct logos for teams", async () => {
        const teamsData = [
            { id: 1, name: "Gryffindor" },
            { id: 2, name: "Hufflepuff" },
            { id: 3, name: "Ravenclaw" },
        ];

        Axios.get.mockResolvedValueOnce({ data: teamsData });

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Wait for the teams to be rendered
        await waitFor(() => {
            const gryffindorLogo = screen.getByAltText(/Gryffindor/i);
            const hufflepuffLogo = screen.getByAltText(/Hufflepuff/i);
            const ravenclawLogo = screen.getByAltText(/Ravenclaw/i);

            expect(gryffindorLogo).toBeInTheDocument();
            expect(hufflepuffLogo).toBeInTheDocument();
            expect(ravenclawLogo).toBeInTheDocument();
        });
    });

});





