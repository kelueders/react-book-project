import { BookState } from "../redux/slices/rootSlice";

let token = "e6d06a8006fb30bc066180664a02208f44b3a07008dd197a"

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://rangers-books-galore2.glitch.me/api/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async (data: BookState) => { //change this to Drone Interface once created
        const response = await fetch(`https://rangers-books-galore2.glitch.me/api/books`, {
            method: 'POST',      // POST is for creating new data, PUT is for updating data
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    update: async(id: string, data: BookState) => { //change this to Drone Interface once created
        const response = await fetch(`https://rangers-books-galore2.glitch.me/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status 
        }

        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://rangers-books-galore2.glitch.me/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status
        }
    }
}