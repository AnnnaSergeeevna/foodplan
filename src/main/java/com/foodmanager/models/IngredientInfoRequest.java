package com.foodmanager.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientInfoRequest {
    private Long ingredient;
    private Integer howMuch;
    private UnitOfMeasure uom;
}
