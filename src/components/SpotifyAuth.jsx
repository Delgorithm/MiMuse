import React, { useEffect, useState } from "react";


async function fetchTrackData(accessToken) {
    const trackId = '2TpxZ7JUBn3uw46aR7qd6V';
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch track data: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

const SpotifyAuth = () => {
    const [profile, setProfile] = useState(null);


    async function generateCodeChallenge(codeVerifier) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem("verifier");
    
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://localhost:5173");
        params.append("code_verifier", verifier);
    
        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params
            });
    
            if (!response.ok) {
                throw new Error(`Failed to get access token: ${response.status} - ${response.statusText}`);
            }
    
            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async function fetchProfile(token) {
        try {
            const response = await fetch("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch Spotify profile: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
            
            if (!code) {
                const verifier = generateCodeVerifier(128);
                redirectToAuthCodeFlow(clientId, verifier);
            } else {
                try {
                    const accessToken = await getAccessToken(clientId, code);
                    const userProfile = await fetchProfile(accessToken);
                    setProfile(userProfile);
                } catch (error) {
                    console.error(error);
                }
            }
        }

        fetchData();
    }, []);

    async function redirectToAuthCodeFlow(clientId, verifier) {
        const challenge = await generateCodeChallenge(verifier);
        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "http://localhost:5173/callback");
        params.append("scope", "user-read-private user-read-email");
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);

        document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }

    return (
        <div>
            <h1>Display your Spotify profile data</h1>
            <section id="profile">
                <h2>Logged in as: {profile ? profile.display_name : 'Not logged in'}</h2>
                {profile && profile.images && profile.images[0] && <img src={profile.images[0].url} alt="Profile" />}
                <ul>
                    <li>User ID: {profile ? profile.id : 'N/A'}</li>
                    <li>Email: {profile ? profile.email : 'N/A'}</li>
                    <li>Spotify URI: {profile ? profile.uri : 'N/A'}</li>
                    <li>Link: {profile ? <a href={profile.external_urls.spotify}>{profile.external_urls.spotify}</a> : 'N/A'}</li>
                    <li>Profile Image: {profile && profile.images && profile.images[0] ? profile.images[0].url : 'N/A'}</li>
                </ul>
            </section>
        </div>
    );
}

export default SpotifyAuth;
