# Read CSV as Stream and Put Data in MongoDB

A simple demo project that reads a csv file with unlimited size using stream and saves each line to MongoDB database.

---

### Requirements

- NodeJS >= 18.
- Docker >= 20.
- Docker Compose >= 2.16.

---

### Install

- Install dependencies:

```
yarn install
```

- Place a .csv file named `data.csv` (unlimited size) in the `data/` folder.

---

### Usage

- Start MongoDB database:
```
docker compose up -d
```

- Start service:

```
yarn start
```

Check the data being imported in your preferred MongoDB interface.

---

Enjoy yourself! =)
