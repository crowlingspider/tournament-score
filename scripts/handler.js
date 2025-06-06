import {
    update_name,
    update_status,
    update_score,
    addPastMatch,
    announce_score
} from './updater.js'
const announce_toggle = document.getElementById("announceToggle");
export function handle_game(snapshot) {
    handle_name(snapshot);
    handle_score(snapshot);
}

export function handle_name(snapshot) {
    const data = snapshot.val();
    update_name(
        data.teama.name,
        data.teamb.name
    );
}

export function handle_score(snapshot) {
    const data = snapshot.val();
    update_score(
        parseInt(data.teama.score), 
        parseInt(data.teamb.score)
    );
    if (announce_toggle.checked){
     const text = `${data.teama.name} : ${data.teama.score} , ${data.teamb.name} : ${data.teamb.score}`;
     announce_score(text);
    }
    
}

export function handle_status(snapshot) {
    const data = snapshot.val();
    update_status(
        data
    );
}

export function past_matches(snapshot){
    const data = snapshot.val();
    const matches = Object.values(data);
    const container = document.getElementById('past-matches');
    container.innerHTML = '';
    matches.forEach(match => {
        let team1=match.teama.name;
        let score1=match.teama.score;
        let team2=match.teamb.name;
        let score2=match.teamb.score;
        addPastMatch(
            team1,
            score1,
            team2,
            score2
        )
    });
}