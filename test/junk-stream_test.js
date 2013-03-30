var junk_stream = require('../lib/junk-stream.js');

exports['junk_stream'] = {
  setUp: function(done) {
    // setup here
    done();
  }
  , 'gen_fake_correct_for_string': function (test) {
    test.equal(typeof(junk_stream.gen_fake_data({key: String}).key), 'string');
    test.done();
  }
  , 'gen_fake_correct_for_number': function (test) {
    test.equal(typeof(junk_stream.gen_fake_data({key: Number}).key), 'number');
    test.done();
  }
  , 'gen_fake_correct_for_boolean': function (test) {
    test.equal(typeof(junk_stream.gen_fake_data({key: Boolean}).key), 'boolean');
    test.done();
  }
};
