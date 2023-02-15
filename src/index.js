/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'node:fs';
import csvtojson from 'csvtojson';
import { Transform } from 'node:stream';

dotenv.config();

const main = async () => {
  await mongoose.connect(`${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`);

  const csvSchema = new mongoose.Schema({
    content: Map,
  });

  const CsvModel = mongoose.model('csv', csvSchema);

  fs.createReadStream('data/data.csv')
    .pipe(csvtojson())
    .pipe(new Transform({
      async transform(chunk, _encoding, callback) {
        const csv = new CsvModel({ content: JSON.parse(chunk.toString()) });

        await csv.save();

        callback();
      },
    }));
};

main();
