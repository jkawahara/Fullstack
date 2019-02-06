USE fullstack_db;

INSERT INTO Classes(name, posts)
VALUES
  ('UCB', 'UCB Posts'),
  ('Bootcamp2', 'Bootcamp2 Posts'),
  ('Bootcamp3', 'Bootcamp3 Posts');

INSERT INTO Users(userPhotoUrl, name, email, password, isAdmin, needMentor, ClassId)
VALUES
  ('https://media.licdn.com/dms/image/C5603AQG6oIzYU0_C9w/profile-displayphoto-shrink_800_800/0?e=1554336000&v=beta&t=G7leRd5ZWrh5pOIhEt1tJbVb27DZdpdclf44XooZKX8', 'Orion Abrams', 'orion@orion.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 1), 
  ('https://media.licdn.com/dms/image/C5603AQFYvsPCK8iMSw/profile-displayphoto-shrink_800_800/0?e=1554336000&v=beta&t=MpFnApnlt9rvQzR1mCg_CUkLE8liqGinQSmd8EyZ_D8', 'Jarren Patao', 'jarren@jarren.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 1, 1),
  ('https://media.licdn.com/dms/image/C5603AQHYUlcdtSjAIQ/profile-displayphoto-shrink_800_800/0?e=1554336000&v=beta&t=8CctkU5G6inxEk0Ej5RQgBxsWP8xf44JN3Ruh_w0PV0', 'Jason Villaluz', 'jason@jason.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 1),
  ('https://media.licdn.com/dms/image/C5603AQEfxWsIuFICBw/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=Usn8UAE3KKme2BZmeNZmyEXWEPqkTexk0PDH7Tv0pWA', 'John Kawahara', 'john@john.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 1, 1),
  ('https://www.nssi.com/media/wysiwyg/images/2.jpg', 'User5', 'user5@user.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 2),
  ('http://www.utas.edu.au/__data/assets/image/0010/853885/students.jpg', 'User6', 'user6@user.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 2),
  ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMPR0hpm269vpL4p3LB-tHvVOfyen9TEXbEODDY4NAHO8v6Cg', 'User7', 'user7@user.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 3),
  ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjJ_86Tjsc6t7aovg7nTEP_BqAwfMNilivmlLkgoKQccgUBt-', 'User8', 'user8@user.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 0, 0, 3),
  ('https://media.licdn.com/dms/image/C5603AQG5-OfzBXRM-A/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=sk78BGYN1cgqn-dRXz4gksE_4kbJSpgtj7aY0Q05jHg', 'David Hallinan', 'david@david.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 1, 0, 1),
  ('https://media.licdn.com/dms/image/C5603AQGb2w2LrjZX4A/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=OP2D6n4qy0Vmh8Or5YxwlTb4JTNlYZ5i16NxbKPFwYU', 'Glo Austin', 'glo@glo.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 1, 0, 2),
  ('https://media.licdn.com/dms/image/C4D03AQHtCZ7KvfIPRg/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=A0JX-biWLvvUk_QEEelPqxkslYKH_qca37khgEbkG0w', 'Hannah Bowers', 'hannah@hannah.com', '$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO', 1, 0, 3);

INSERT INTO Lessons (name, frontEndName, lessonUrl, original, ClassId) 
VALUES
-- React
  ('Lesson 1', 'React State', 'https://codesandbox.io/embed/olrox0pxv5', 1, 1),
  ('Lesson 1', 'React State', 'https://codesandbox.io/embed/olrox0pxv5', 1, 2),
  ('Lesson 1', 'React State', 'https://codesandbox.io/embed/olrox0pxv5', 1, 3),
  ('Lesson 2', 'React Props', 'https://codesandbox.io/embed/1483ql8m4j', 1, 1),
  ('Lesson 2', 'React Props', 'https://codesandbox.io/embed/1483ql8m4j', 1, 2),
  ('Lesson 3', 'React Forms', 'https://codesandbox.io/embed/mmqyjzljvj', 1, 1),
-- jQuery
  ('Lesson 4', 'Jquery Fridge Game', 'https://codesandbox.io/embed/k5y27rrn93', 0, 1),
  ('Lesson 5', 'Jquery Calculator', 'https://codesandbox.io/embed/ovlmo5w495', 0, 1),
  ('Lesson 6', 'Jquery Timeouts', 'https://codesandbox.io/embed/7j9prq2010', 0, 1)