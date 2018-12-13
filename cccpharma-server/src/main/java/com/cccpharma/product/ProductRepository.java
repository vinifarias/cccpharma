package com.cccpharma.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, String> {

    List<Product> findAllByName(String name);
    List<Product> findAllByManufacturer(String manufacturer);
    List<Product> findAllByAvailable(boolean available);
}
