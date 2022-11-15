import express from 'express';
import mongoose from 'mongoose';
import routerProjects from './routes/v1/projects';
import routerUsers from './routes/v1/users';
import routerUploads from './routes/v1/uploads';
import { API, MONGOOSE, OPTIONS, PORT } from './config';


const app = express();

app.use(express.json());
app.use(`${API}projects`, routerProjects);
app.use(`${API}users`, routerUsers);
app.use(`${API}uploads`, routerUploads);

mongoose.connect(MONGOOSE!, OPTIONS)
        .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
        .catch(err => console.log(err));