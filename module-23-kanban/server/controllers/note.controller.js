import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
	return res.status(200).end();
}

export function addNote(req, res) {
  	const { note, laneId } = req.body;

  	if (!note || !note.task || !laneId) {
    	res.status(400).end();
  	}

  	const newNote = new Note({
    	task: note.task,
  	});

  	newNote.id = uuid();
    newNote.laneId = laneId;
  	newNote.save((err, saved) => {
    	if (err) {
      		res.status(500).send(err);
    	}
    	Lane.findOne({ id: laneId })
      	.then(lane => {
        	lane.notes.push(saved);
        	return lane.save();
      	})
      	.then(() => {
        	res.json(saved);
      	});
  	});
}

export function deleteNote(req, res) {
  Lane.findOne({ id: req.body.laneId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    note.notes.forEach(note => {
      if (note.id === req.body.noteId) {
        note.remove(() => {
          res.status(200).end();
        });
      }
    });
  });
}

export function updateNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  Note.findOne({ id: req.params.noteId })
    .then(note => {
      note.update({ task: req.body.task }, (err, resp) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).end();
      });
    });
}

export function moveBetweenLanes(req, res) {
  Note.findOne({ id: req.params.note.id })
    .then(note => {
      note.update({ laneId: req.body.targetId }, (err, resp) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).end();
      });
    });
  
}