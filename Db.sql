CREATE DATABASE peoplecrud;

USE  peoplecrud;
CREATE TABLE user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE PROCEDURE insert_user_data (
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_job_title VARCHAR(100)
)
BEGIN
    INSERT INTO user_data (first_name, last_name, email, job_title)
    VALUES (p_first_name, p_last_name, p_email, p_job_title);
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE get_user_by_id (
    IN p_id INT
)
BEGIN
    SELECT *
    FROM user_data
    WHERE id = p_id;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE get_all_users ()
BEGIN
    SELECT *
    FROM user_data;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE update_user_data (
    IN p_id INT,
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_job_title VARCHAR(100)
)
BEGIN
    UPDATE user_data
    SET first_name = p_first_name,
        last_name = p_last_name,
        email = p_email,
        job_title = p_job_title
    WHERE id = p_id;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE delete_user_data (
    IN p_id INT
)
BEGIN
    DELETE FROM user_data
    WHERE id = p_id;
END//

DELIMITER ;
