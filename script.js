/* Pamata stils visam ķermenim */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background: #fff4f4; /* maigi rozā fons */
  color: #333;
}

/* Augšējā un apakšējā josla */
header, footer {
  background-color: #d94c4c; /* tumši sarkana krāsa */
  color: white;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Galvenais saturs ar centru */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

/* Katra sadaļa kā "kartiņa" */
.form-section {
  background: white;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
}

/* Ievades lauki un teksta stils */
input[type="number"] {
  padding: 0.5rem;
  font-size: 1rem;
  width: 80px;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}

/* Poga dizains */
button {
  background-color: #d94c4c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

button:hover {
  background-color: #b93c3c; /* tumšāka versija, kad uzbrauc */
}

/* Rezultāta stils */
#result {
  margin-top: 1rem;
  font-weight: normal;
  background: #fff0f0;
  padding: 1.5rem;
  border: 1px solid #f1c0c0;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

#result ul {
  padding-left: 1.2rem;
}

#result hr {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #ccc;
}

strong {
  color: #b93c3c;
}
