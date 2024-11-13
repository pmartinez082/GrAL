
-- erabiltzaileen txertatzea
INSERT INTO `putxerappdb`.`user` (`username`, `password`, `role`, `email`) VALUES ('admin1', '123', 'admin', 'admin1@admin.com');
INSERT INTO `putxerappdb`.`user` (`username`, `password`, `role`, `email`) VALUES ('epaile1', '456', 'referee', 'epaile1@epaile.com');
INSERT INTO `putxerappdb`.`user` (`username`, `password`, `role`, `email`) VALUES ('epaile2', '789', 'referee', 'epaile2@epaile.com');
INSERT INTO `putxerappdb`.`user` (`username`, `password`, `role`, `email`) VALUES ('epaile3', 'abc', 'referee', 'epaile3@epaile.com');
INSERT INTO `putxerappdb`.`user` (`username`, `password`, `role`, `email`) VALUES ('epaile4', 'def', 'referee', 'epaile4@epaile.com');


-- epaileen hautatzea
SELECT username, mail, password, role
FROM `putxerappdb`.`user`
WHERE role = 'referee';

--erabiltzailea existizen bada konprobatzea
SELECT EXISTS (
    SELECT 1
    FROM `putxerappdb`.`user`
    WHERE username = 'username'
);

