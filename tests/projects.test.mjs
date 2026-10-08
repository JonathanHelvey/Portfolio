import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS } from '../src/data/projects.js';

test('confidential projects have no public link or source', () => {
  for (const project of PROJECTS.filter((p) => p.confidential)) {
    assert.equal(project.demo, null, project.id);
    assert.equal(project.source, null, project.id);
  }
});

test('project ids are unique', () => {
  const ids = PROJECTS.map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length);
});
