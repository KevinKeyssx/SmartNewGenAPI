/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.data;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * @author Kevin Candia
 *         23-09-2020
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Label implements Serializable {

    protected Long idLabel;

    protected String description;

    protected Boolean active;

    protected String comment;

    private static final long serialVersionUID = 1L;

    public Label(long idLabel) {
		this.idLabel = idLabel;
    }

}
